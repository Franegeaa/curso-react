import { useState } from "react"

export function TwitterFollowCard({userName, children}){
    const [isFollowing, setIsFollowing] = useState(false)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    } 

    const text = isFollowing ? 'Dejar de Seguir' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-buttonFollow is-following' 
    : 'tw-followCard-buttonFollow'

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="El avatar" 
                src={`https://unavatar.io/twitter/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}        