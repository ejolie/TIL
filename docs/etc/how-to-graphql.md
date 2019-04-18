2019년 4월 5일 금요일

# How to GraphQL {docsify-ignore-all}

## 1. 소개

GraphQL은 기존 REST API의 대안으로 새롭게 나타난, 더욱 강력한 API입니다. Facebook에 의해 오픈 소스로 개발되었고 현재 많은 기업과 개인들에 의해 사용되고 있습니다. (참고로, API란 클라이언트가 서버로부터 데이터를 로딩하는 방식을 말합니다.)

### GraphQL - API를 위한 Query Language

종종 사람들은 GraphQL을 데이터베이스 기술로 혼동하곤 합니다. 이것은 오해이며, GraphQL은 데이터베이스가 아니라 API를 위한 query language입니다.

## 2. REST보다 좋은 GraphQL

### REST와 GraphQL에서의 데이터 패치

Rest API에서는 일반적으로 여러 endpoint에 접근하여 데이터를 가져와야 합니다. 기본적인 유저 데이터를 가져오기 위해선 `/users/id` endpoint에 접근해야 합니다. 두 번째로, 유저의 모든 게시물을 불러오기 위해선 `/users/<id>/posts` 에 접근해야 합니다. 세 번째로, 유저의 팔로워 목록을 불러오기 위해선 `/users/<id>/followers` 에 접근해야 합니다.

반면 GraphQL에서는 정확한 데이터 요구사항을 포함하는 단 하나의 query를 GraphQL 서버에 전송하기만 하면 됩니다. 그러면 서버는 해당 요구사항을 충족시키는 JSON 객체를 회신합니다.

## 3. 핵심 개념

이 챕터에서는 GraphQL의 핵심적인 언어 구조를 다룰 예정입니다. Queries와 Mutations을 전송하는 것뿐만 아니라 Types를 정의하는 구문도 가볍게 살펴볼 것입니다.

### The Schema Definition Language (SDL)

GraphQL은 API의 *스키마(Schema)*를 정의하기 위해 사용되는 고유의 type system을 갖고 있습니다. 스키마를 작성하는 구문을 *Schema Definition Language (SDL)*라 부릅니다.

여기 Person이라는 단순한 type을 정의하기 위해 SDL을 사용하는 예제가 있습니다.

```graphql
type Person {
  name: String!
  age: Int!
}
```

이 타입은 두 개의 *필드(fields)*를 갖고 있습니다.

### Queries로 데이터 패치하기

REST API를 사용하면 데이터는 특정 endpoint로부터 로드됩니다. 각 endpoint는 자신히 반환하는 정보의 명확히 정의된 구조를 갖고 있습니다. 이것은 클라이언트의 데이터 요구사항이 endpoint와 연결된 URL에서 효과적으로 *인코딩된다*는 것을 의미합니다.

이러한 접근 방식은 GraphQL과 엄격히 다릅니다. 고정된 데이터 구조를 반환하는 여러 endpoint를 가지는 대신, GraphQL API는 일반적으로 *하나의 endpoint*만을 노출합니다. 이것은 반환되는 데이터의 구조가 고정되어 있지 않기 때문에 가능한 일입니다. 대신, 완전히 유연하고 고객으로 하여금 어떤 데이터가 현재 필요한지 결정하게 해줍니다.

이것은 고객이 필요로 하는 데이터를 표현하기 위해 서버로 더 많은 *정보*를 전송해야 한다는 것을 의미합니다.

### 기본 Query

```graphql
{
  allPersons {
    name
  }
}
```

Query 안의 allPersons 필드는 query의 *루트 필드(root field)*라고 불립니다. 루트 필드 안에 딸려 오는 모든 것은 query의 p*ayload*라고 불립니다.

### Mutations으로 데이터 작성하기

- 새로운 데이터를 생성
- 기존의 데이터를 업데이트
- 기존의 데이터를 삭제

```graphql
mutation {
  createPerson(name: "Bob", age: 36)
  name
  age
}
```

### Subscriptions로 실시간 업데이트하기

고객이 어떤 이벤트를 *subscribe*하면, 서버와의 연결을 생성하고 지속적인 연결을 유지합니다. Query와 mutation이 "request-response-cycle"을 구성하는 반면, subscription은 클라이언트에게 전송된 data *stream*을 나타냅니다.

```graphql
subscription {
  newPerson {
    name
    age
  }
}
```

출처 : https://www.howtographql.com
