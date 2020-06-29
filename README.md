Показан вывод данных с сервера в компонент с помощью GraphQL и Apollo

const Fortnite = () => {

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

                            <div className={classes.image}>
                                <img src={data.category.offerPicture} alt="offer"/>
                            </div>
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
