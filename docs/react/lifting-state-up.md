2019년 4월 24일 수요일

# State 올리기

일부 컴포넌트가 동일한 변경 데이터를 보여줘야 할 때가 있습니다. 이럴 때 **공통 조상에 state를 끌어올리는 걸 권장**합니다.

이 섹션에서는 예시로 주어진 온도에서 물의 끓음 여부를 확인하는 온도 계산기를 만듭니다. 먼저 `BoilingVerdict` 컴포넌트는 prop으로 `celcius` 온도를 받고, 물이 끓었는 지 표시합니다.

```jsx
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```

그리고 나서, `Calculator` 컴포넌트를 만듭니다. 이 컴포넌트는 온도를 입력받을 `<input>` 을 렌더링하고, 그 값을 `this.state.temperature`에 넣습니다.

추가로, 현재 입력 값을 바탕으로 앞서 정의한 `BoilingVerdict`를 렌더링합니다.

```jsx
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value
    });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperatrue in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}
```

## 두 번째 Input 추가하기

요구사항을 추가하여 섭씨 입력과 함께 화씨 입력을 제공하고 동기화 상태를 유지하려고 합니다.

먼저 `Calculator` 에서 `TemperatureInput` 컴포넌트를 추출하는 것부터 시작해봅시다. "c" 나 "f" 값을 넣을 수 있는 `scale` prop을 추가합니다.

```jsx
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: ''
    };
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

이제 `Calculator`를 바꾸어 온도 input을 두 개로 나눠서 렌더링 할 수 있습니다.

```jsx
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
```

이제 두 개의 input을 가지고 있지만 그중 하나에만 온도를 넣어 입력하면 다른 input은 업데이트되지 않습니다. 이는 최초 요구사항이었던 ‘동기화 상태를 유지한다’ 에 어긋납니다. 

또한 `Calculator` 에서 `BoilingVerdict` 도 표시할 수 없습니다. `Calculator` 는 현재 온도가 `TemperatureInput` 안에 숨어있기 때문에 현재 온도를 알 수 없습니다.

## 변환 함수 작성하기

먼저 섭씨와 화씨를 서로 변환해주는 두 개의 함수를 입력합니다.

```jsx
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

이 두개의 함수는 숫자를 변환합니다. 추후에 문자열 `temperature` 과 변환 함수를 인수로 받아서 문자열을 반환하는 다른 함수를 만들 것입니다. 다른 input을 기반으로 한 input의 값을 계산할 때 사용합니다.

그 함수는 유효하지 않은 `temperature` 에 빈 문자열을 반환하고, 출력을 세번째 소수점 이하부터 반올림합니다.


```jsx
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// tryConvert('abc', toCelsius) : ''
// tryConvert('10.22', toFahrenheit) : '50.396'
```

## State 올리기

현재 두 개의 `TemperatureInput` 컴포넌트는 로컬 state 값 `temperature` 을 독립적으로 갖고 있습니다.


## 정리

**React에서 변경되는 모든 데이터에 대해 "신뢰 가능한 단일 출처"가 있어야 합니다.** 일반적으로 state는 렌더링을 위해 필요한 컴포넌트에 처음 추가됩니다. 그런 다음 **다른 컴포넌트에서도 그 state를 필요로 하면, 가장 가까운 공통 조상으로 state를 올릴 수 있습니다.**

