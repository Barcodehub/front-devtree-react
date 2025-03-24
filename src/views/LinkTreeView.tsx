import DevTreeInput from "../components/DevTreeInput"
import { social } from "../data/social"
import { useEffect, useState } from "react"
import { isValidUrl } from "../utils"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "../api/DevTreeAPI"
import { User } from "../types"
import { socialNetwork } from '../types/index';



export default function LinkTreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState(social)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value }  : link )
    setDevTreeLinks(updatedLinks)
  
  
    queryClient.setQueryData(['user'], (prevData: User) => {
      return{
        ...prevData,
        links: JSON.stringify(updatedLinks)
      }
    })
  }

  const handleEnableLink = (socialNetwork: string) => {
    const updatedLinks = devTreeLinks.map(link => {
     if( link.name === socialNetwork ){
        if(isValidUrl(link.url)){
          return   {...link, enabled: !link.enabled }
        }else{
          toast.error('URL no valida')
        }
     }
      return link
  })
    
      setDevTreeLinks(updatedLinks)

      queryClient.setQueryData(['user'], (prevData: User) => {
        return{
          ...prevData,
          links: JSON.stringify(updatedLinks)
        }
      })
  }

const queryClient = useQueryClient()
const user: User = queryClient.getQueryData(['user'])!


  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message)
  },
  onSuccess: () => {
      toast.success("actualizado")  }
  })


  // const handleEnableLink = (socialNetwork: string) => {
  //   const updatedLinks = devTreeLinks.map(link => link.name === socialNetwork ? {...link, enabled: !link.enabled } : link)
  //   setDevTreeLinks(updatedLinks)
  // }

  useEffect(() => {
    const updatedData = devTreeLinks.map(item => {
      const userlink = JSON.parse(user.links).find((link: socialNetwork) => link.name === item.name)
      if(userlink){
        return {...item, url: userlink.url, enabled: userlink.enabled}
      }
      return item
    })

    setDevTreeLinks(updatedData)
  }, [])




  return (
    <>
    <div className="space-y-5">
      {devTreeLinks.map(item => (

          <DevTreeInput
          key={item.name}
          item={item}
          handleUrlChange={handleUrlChange}
          handleEnableLink={handleEnableLink}
          />

      ))}

      <button
      className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold"
      onClick={() => mutate(user)}
      >
      
        Guardar Cambios
      </button>


    </div>
    </> 
 )
}
