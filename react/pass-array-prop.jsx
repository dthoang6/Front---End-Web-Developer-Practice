const List = (props) => {
    return ({props.tasks.join(", ")});
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <List tasks={["Walk", "Cook", "Bake"]} />
                <List tasks={["Study", "Code", "Eat"]} />
            </div>
        );
    }
}