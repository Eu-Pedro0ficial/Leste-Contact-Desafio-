// React
import { useEffect } from "react"

// Style
import style from "./index.module.css";

// Zustand
import { useFlashMessage } from "../../store/useFlashMessage";

// Icon
import { MdDomainVerification } from "react-icons/md";

export default function FlashMessage(){
  const [
    isOpenMessageModal, 
    setIsOpenMessageModal, 
    message
    ] = useFlashMessage((state) => [
      state.flashMessageModal, 
      state.setFlashMessageModal,
      state.message
    ]);

  useEffect(()=>{
    if(message){
      setIsOpenMessageModal(true);
    }else{
      setIsOpenMessageModal(false);
    }

  }, [message, isOpenMessageModal, setIsOpenMessageModal]);

  return (
    <>
      {isOpenMessageModal ?
        <dialog className={style.messageModal} open>
          <p>{message}</p>
          <MdDomainVerification size={30} color="#000000" />
        </dialog>
        :
        <></>
      }
    </>
  )
}
