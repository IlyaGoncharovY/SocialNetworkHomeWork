import React, {useState} from "react";
import s from "./Paginator.module.css";
import Button from "@mui/material/Button";

type PaginatorType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = (props: PaginatorType) => {

    let [portionNumber, setPortionNumber] = useState<number>(1)

    let portionSize = props.portionSize
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    const prevButtonHandler = () => {
        setPortionNumber(portionNumber - 1)
    }

    const nextButtonHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (

        <div className={s.pagesContainer}>
            {portionNumber > 1 &&
                <Button variant={"contained"} size={"small"} onClick={prevButtonHandler}>prev</Button>}
            <div className={s.pageUsers}>
                {pages
                    .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                    .map(el => {
                        return <span className={props.currentPage === el ? s.selectedPageOn : s.selectedPageOff}
                                     onClick={() => {
                                         props.onPageChanged(el)
                                     }}>{el}</span>
                    })}
            </div>
            {portionCount > portionNumber &&
                <Button variant={"contained"} size={"small"} onClick={nextButtonHandler}>next</Button>}
        </div>
    )
}