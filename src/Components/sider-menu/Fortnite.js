import React, {useState} from "react";
import style from "../styles/sider.module.css";
import {useQuery} from "@apollo/react-hooks";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from '@material-ui/core/styles';
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import Divider from '@material-ui/core/Divider';
import {gql} from "apollo-boost";
// import {filter} from "graphql-anywhere"


const Fortnite = () => {

    const useStyles = makeStyles({
        fortWrapper: {
            width: '1006px',
            height: '0px',
            left: '68px',
            top: '45px',
            paddingTop: '170px',
            paddingLeft: '68px'
        },
        divider: {
            border: '1px solid #006D75',
        },
        fortList: {},
        fortHeader_title: {
            position: 'relative',
            height: '36px',
            fontFamily: 'Bebas Neue',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '36px',
            color: '#FFFFFF',
            paddingTop: '10px',
            width: '1000px',
            marginLeft: '-14px',
            float: 'left',

        },
        fortHeader_text: {
            marginLeft: '-14px',
            marginRight: '-14px',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            opacity: '0.8'
        },
        arrow: {
            width: '20px',
            height: '10px',
            color: '#13C2C2',

        }
    });
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const {data, loading} = useQuery(queryGame)
    if (loading) return <h2>Loading...</h2>


    return (
        <div>
            <div className={classes.fortWrapper}>
                <div>
                    <h1 className={style.title}>ABOUT GAME FORTNITE</h1>
                </div>
                <Divider className={classes.divider}/>
                <List>
                    <ListItem button onClick={handleClick} className={classes.fortList}>
                        <h3 className={classes.fortHeader_title}>{data.category.name}</h3>
                        {open ? <UpOutlined className={classes.arrow}/> : <DownOutlined className={classes.arrow}/>}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <img src={data.category.offerPicture} alt="offer"/>
                            <p className={classes.fortHeader_title}>Subcategories</p>
                            {data.category.children.edges.map(({node}) => {
                                return <ListItem key={node.id} className={classes.fortHeader_text}>
                                    {node.name}
                                </ListItem>
                            })}

                            <p className={classes.fortHeader_title}>Questions</p>
                            {data.category.faq.edges.map(({node}) => {
                                return <ListItem key={node.id} className={classes.fortHeader_text}>
                                    {node.question}
                                </ListItem>
                            })}

                            {/*<ListItem primaryText={data.category.name} className={classes.fortHeader_text}*/}
                            {/*   category={filter(fragmentsChild.child, data.category)}/>*/}

                        </List>
                    </Collapse>
                </List>
            </div>
        </div>
    )
}

const fragmentsChild = {
    child: gql`
        fragment Children on CategoryNodeConnection{
            edges{
                node{
                    id
                    name
                }
            }
        }
    `
}

const fragmentsFaq = {
    question: gql`
        fragment Faq on FaqNodeConnection{
            edges{
                node{
                    question
                }
            }
        }
    `
}

const queryGame = gql`
    query Game($id: String = "Q2F0ZWdvcnlOb2RlOjEw"){
        category(id: $id){
            offerPicture
            name
            offerPicture
            children(first:6){
                ...Children
            }
            faq{
                ...Faq
            }
        }
    }
    ${fragmentsChild.child}
    ${fragmentsFaq.question}
`


export default Fortnite
