import React from "react";
import s from "./Paginator.module.css";


type PaginatorType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        {pages.map(el => {
            return <span className={props.currentPage === el ? s.selectedPage : ""}
                         onClick={() => {
                             props.onPageChanged(el)
                         }}>{el}</span>

        })}

    </div>
}