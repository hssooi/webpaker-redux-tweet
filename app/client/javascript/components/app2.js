import React from 'react';
//reduxやactionsをimportしていない。→ 必要なモノは親から全てprops経由で受け取っている
export default class App2 extends React.Component {
    render() {
      console.log("##app2: " + this.props.incval)
        return (
            <div>
                <span>{this.props.incval}</span><br/>
              <button onClick={ () => this.props.Inc_Click() }>＊t-test＊</button>
            </div>
        );
    }
}