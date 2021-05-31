import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Calculator extends React.Component {
  state={
    display: ''
  }
  handleClick(btnVal){
    let result= this.state.display;
      if(result ==='0'){
        result='';
      }
      if(btnVal === '='){
        result = String(eval(result)); //INBUILT FUNCTION OF JS WHICH EVALUATES MA THEMATICAL RESULT AND GIVES US THE ANSWER
      }
      else if(btnVal === 'DEL'){
        result ='';
      }
      else{
        result += btnVal;
      }                     

    this.setState({
      display: result,
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.display}>
      {this.state.display}
      </Text>
      <View style={styles.row}>
        <MyButton val={"7"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={"8"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={"9"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={'/'} handleClick={this.handleClick.bind(this)} highlight/>
      </View>
      <View style={styles.row}>
        <MyButton val={"4"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={"5"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={"6"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={'*'} handleClick={this.handleClick.bind(this)} highlight/>
      </View>
      <View style={styles.row}>
        <MyButton val={"1"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={"2"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={"3"} handleClick={this.handleClick.bind(this)} />
        <MyButton val={'+'} handleClick={this.handleClick.bind(this)} 
        highlight />
      </View>
      <View style={styles.row}>
        <MyButton val={'DEL'} handleClick={this.handleClick.bind(this)}/>
        <MyButton val={"0"}   handleClick={this.handleClick.bind(this)}/>
        <MyButton val={"="}   handleClick={this.handleClick.bind(this)}/>
        <MyButton val={'-'}   handleClick={this.handleClick.bind(this)}           highlight mycolor/>
      </View>
      </View>
    );
  }
}
const MyButton = ({val, handleClick, highlight, mycolor}) =>(
  <TouchableOpacity style={[styles.btn,{backgroundColor:(highlight ? '#00203FFF': '#ADEFD1FF')}]} onPress={()=>{
      handleClick(val)
  }}>
    <Text style={styles.btnText}>
      {val}
    </Text>
  </TouchableOpacity> 
)
const styles = StyleSheet.create({
  
  display:{
    fontSize:55,
    paddingBottom: 7,
    paddingRight: 10,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row:{
    flexDirection: 'row',
  },
  btn:{
    flex: 1,
    padding: 15,
    outline:'none',
  },
  btnText: {
    fontSize: 30,
    color: '#ff156f',
    textAlign:'center',
    textDecorationStyle: 'green',
  },
});
