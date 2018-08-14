import React from 'react';
//reduxやactionsをimportしていない。→ 必要なモノは親から全てprops経由で受け取っている
export default class App extends React.Component {
    render() {
      let v = 0;
      console.log("app: " + this.props.fuga)
        return (
            <div>
                <span>{this.props.fuga}</span><br/>
              <input ref={(input) => { v = input; }} type={"text"}/>
                <button onClick={ () => this.props.Increment_Click(v.value) }>＊増加＊</button>
                <button onClick={ () => this.props.Decrement_Click() }>＊減少＊</button>
            </div>
        );
    }
}