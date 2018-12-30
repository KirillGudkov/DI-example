import React from 'react';
import {StyleSheet, Text, View, FlatList} from "react-native";
import {bind} from 'dependency-injector';

interface Props {
  initialScrollIndex: number
  range: Array<number>
}

interface Item {
  item: number,
  index: number
}

export class Counter extends React.PureComponent<Props> {

  counter!: FlatList<number>;

  current!: number;

  state = {
    items: [0]
  };

  constructor(props: Props) {
    super(props);

    const items = [];

    if (props.range.length > 1) {
      for (let i = props.range[0]; i <= props.range[1]; i++) {
        items.push(i);
      }
    } else {
      items.push(0);
    }
    this.current = items.indexOf(props.initialScrollIndex) || 0;

    this.state.items = items;
  }

  componentDidMount() {
    setTimeout(() => {
      this.counter.scrollToItem({animated: true, item: this.state.items.indexOf(this.props.initialScrollIndex)});
    }, 390);
  }

  public increase(): void {
    if (this.current < this.state.items.indexOf(this.state.items[this.state.items.length - 1])) {
      this.current += 1;
      this.counter.scrollToItem({animated: true, item: this.current});
    }
  }

  public decrease(): void {
    if (this.current > this.state.items.indexOf(this.state.items[0])){
      this.current -= 1;
      this.counter.scrollToItem({animated: true, item: this.current});
    }
  }

  public reset(): void {
    this.current = 0;
    this.counter.scrollToItem({animated: true, item: 0});
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
          onScrollToIndexFailed={() => null}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ref={this.createRef}
          contentContainerStyle={style.counterListContainerStyle}
          style={style.counterList}
          data={this.state.items}
          scrollEnabled={false} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  number: {
    fontSize: 72,
    color: 'white',
    fontWeight: '200',
  },
  numberContainer: {
    backgroundColor: 'green',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    height: 100,
    width: 100
  },
  counterList: {
    height: 100,
    width: 100
  },
  counterListContainerStyle: {
    alignItems: 'center'
  },
});
