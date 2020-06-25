import React, {useState} from "react";
import style from "./sider.module.css";

import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import {useQuery} from "@apollo/react-hooks";



const Fortnite = () => {
    const {data} = useQuery(Defs)

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    const openHandler = () => {
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }


    return (
        <div className={style.container}>
            <div>
                <h1 className={style.title}>ABOUT GAME FORTNITE</h1>
            </div>
            <div className={style.fortWrapper}>
                <div tabIndex={0}
                     className={style.fortHeader}
                     role="button"
                     onKeyPress={() => toggle(!open)}
                     onClick={() => toggle(!open)}>

                    <p className={style.fortHeader_title}>FORTNITE</p>
                    <p className={style.fortHeader_action}>{open ? <UpOutlined /> : <DownOutlined />}</p>

                </div>
                <ul className={style.list}>
                    {data.getGame.map(game => (
                        <li className={style.list_item} key={game.name}>
                            {game.id} {game.name}
                            <button type="button" onClick={() => openHandler}></button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

const Defs = gql`
    category(id: "Q2F0ZWdvcnlOb2RlOjEw" slug: "fortnite") {
    id
    name
    }
`

export default Fortnite