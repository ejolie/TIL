2019년 4월 15일 월요일

# Sass 문법 {docsify-ignore-all}

## 문자열

### 따옴표

CSS에서 문자열음 따옴표로 둘러싸일 필요가 없으나, Sass에서 문자열은 언제나 작은 따옴표(`'`)로 감싸져야 합니다.

`initial`이나 `sans-serif` 같은 특정 CSS 값은 따옴표로 감싸지 않습니다. 

## 숫자

단위를 숫자에 붙이기 위해서는, 해당 숫자에 1단위를 곱해야 합니다.

```scss
$value: 42;

// Yep
$length: $value * 1px;

// Nope
$length: $value + px;
```

### 연산

최상위 숫자 계산은 언제나 괄호로 감싸져야 합니다.

```scss
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
```

## 색

### 색과 변수

색을 한 번 이상 사용할 때는 색을 대변하는 의미 있는 이름을 붙여 변수에 저장하세요.

```scss
$sass-pink: hsl(330, 50%, 60%);
$main-theme-color: $sass-pink;
```

## 리스트

리스트는 Sass에서 배열에 해당하는 개념입니다. 리스트는 어떤 타입의 값이든(리스트도 포함) 저장할 수 있게 만든 (맵과 달리) 평면적인 데이터 구조입니다.

리스트는 다음 가이드라인을 준수해야 합니다.

* 한 줄 혹은 여러 줄
* 80자 줄에 안 들어갈 정도로 길면 반드시 여러 줄에 표기한다.
* CSS 상에서 그대로 사용되지 않는 한, 언제나 쉼표로 분리한다.
* 언제나 괄호로 감싼다.
* 여러 줄인 경우 뒤따르는 심표를 붙이고, 한 줄인 경우 제외한다.

```scss
/ Yep
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Yep
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Nope
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,);
```

## 선택자 내포 (Nesting)

### 일반적인 규칙

#### Sass

```scss
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}
```

#### CSS

```css
.foo .bar:hover {
  color: red;
}
```

출처 : https://sass-guidelin.es/ko/