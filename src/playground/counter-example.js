class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleRest = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };

    } 
    handleAddOne() {
    this.setState((prevState) => {
        return {
            count: prevState.count + 1
        };
    });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    } 

    handleReset() {
        this.setState(() => { 
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button> 
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// // let count = 0;
// // const addOne = () => {
// //     console.log('addOne');
// // };
// // const templateTwo = (
// //     <div>
// //         <h1>count: {count}</h1>
// //         <button onClick={addOne}>+1</button>
// //    </div>
// // );


// // challenge

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne =() => {
//     count--;
//     renderCounterApp()
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp()
// };


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
    
//        </div>
//     );

// }; 

// renderCounterApp();