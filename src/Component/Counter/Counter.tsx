import React from 'react';
import {StyleSheet, Text, View, FlatList} from "react-native";
import {bind} from 'dependency-injector';

interface Props {}

interface Item {
  item: number,
  index: number
}

export class Counter extends React.PureComponent<Props> {

  counter!: FlatList<number>;

  state = {
    items: [0]
  };

  public increase(): void {
    const {items} = this.state;
    items.push(items[items.length - 1] + 1);
    this.setState({items: items}, () => this.scrollToNext());
  }

  public decrease(): void {
    const {items} = this.state;
    if (items.length > 1) {
      items.pop();
      this.setState({items: items}, () => this.scrollToPrev(items));
    }
  }

  public reset(): void {
    this.counter.scrollToItem({animated: true, item: 0});
    setTimeout(() => this.setState({items: [0]}), 250);
  }

  private scrollToNext(): void {
    this.counter.scrollToEnd({animated: true});
  }

  private scrollToPrev(items: Array<number>): void {
    if (items.length > 1) {
      this.counter.scrollToItem({animated: true, item: items.length - 1});
    } else {
      this.counter.scrollToItem({animated: true, item: 0});
    }
  }

  @bind
  private keyExtractor(item: number): string {
    return `num${item}`;
  }

  @bind
  private createRef(node: FlatList<number>): void {
    this.counter = node;
  }

  @bind
  private renderItem({item}: Item) {
    return <Text style={style.number}>{item}</Text>;
  }

  render() {
    return (
      <View style={style.counterContainer}>
        <FlatList
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ref={this.createRef}
          contentContainerStyle={style.counterListContainerStyle}
          style={style.counterList}
          data={this.state.items}
          scrollEnabled={false}
          bounces={false} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  number: {
    fontSize: 42,
    color: 'white',
    fontWeight: '200',
  },
  numberContainer: {
    backgroundColor: 'green',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    height: 50,
    width: 50
  },
  counterList: {
    height: 50,
    width: 50
  },
  counterListContainerStyle: {
    alignItems: 'center'
  },
});
