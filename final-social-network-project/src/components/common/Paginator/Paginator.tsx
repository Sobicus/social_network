import style from './Paginator.module.css'
import React from "react";


type usersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator: React.FC<usersType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(el => {
                    return <span className={props.currentPage === el ? style.selectedPage : ''} onClick={() => {
                        props.onPageChanged(el)
                    }}>
                            {el}
                        </span>
                }
            )}
        </div>
    )
}
