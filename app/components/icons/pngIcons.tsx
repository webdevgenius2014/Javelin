import Image from "next/image"
export const KeyIcon=()=>{
    return(
        <Image 
            src='/images/key-dark.png' 
            width={18}
            height={18}
            alt='key'
        />
    );
}
export const AlertIcon=()=>{
    return(
        <Image 
            src='/images/alert-dark.png' 
            width={18}
            height={18}
            alt='alert-dark'
        />
    );
}
export const ChronicleIcon=()=>{
    return(
        <Image 
            src='/images/Chronicle.png' 
            width={18}
            height={18}
            alt='Chronicle'
        />
    );
}
export const DocumentationIcon=()=>{
    return(
        <Image 
            src='/images/document.png' 
            width={18}
            height={18}
            alt='document'
            color="white"
        />
    );
}
export const SupportIcon=()=>{
    return(
        <Image 
            src='/images/support_icon.png' 
            width={18}
            height={18}
            alt='support_icon'
            color="white"
        />
    );
}
export const CloudComputing=()=>{
    return(
        <Image 
            src='/images/cloud-computing.png'
            width={18}
            height={18}
            alt="cloud-computing"
        />
    )
}