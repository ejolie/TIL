2019년 5월 1일 수요일

# React Apollo

## GraphQL?

GraphQL은 서버 API를 통해 정보를 주고받기 위해 사용하는 쿼리어다. GraphQL API는 보통 하나의 엔드포인트를 사용하며, 요청시 사용하는 쿼리문에 따라 응답의 구조가 달라진다.

## Apollo Client?

Apollo Client는 클라이언트 애플리케이션에서 GraphQL과의 데이터 교환을 도우며, 특별히 리액트에서 사용하는 라이브러리를 React Apollo라고 부른다.

작성된 GraphQL 쿼리는 Apollo Client에서 컴포넌트와 함께 사용할 수 있다. 

* Query - Retrieve Data ("GET")
* Mutation - Manipulate Data ("POST", "PUT", "PATCH", "DELETE")
* SUbscription - Set up realtime connection via Websockets

### Query

데이터를 받아올 땐 Query 컴포넌트를 사용한다. 이 컴포넌트를 사용하기 위해서는 GraphQL 쿼리를 props로 넣어줘야 한다.

Query 컴포넌트에 파라미터로 loading, error와 함께 Query 컴포넌트가 제공하는 data를 넘겨준다. Query 컴포넌트가 마운트되면, 아폴로 클라이언트는 쿼리에대한 observer를 생성한다. 컴포넌트는 아폴로 클라이언트 캐시를 통해 쿼리에 대한 결과값을 구독한다. 먼저, 쿼리 결과값을 아폴로 캐시로부터 가져온다. 없을 경우, 서버로 요청을 보내며, 데이터를 받으면 아폴로 캐시에 저장을 한다.




출처 : https://medium.com/@shlee1353/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%84%ED%8F%B4%EB%A1%9C-react-apollo-%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%99%80-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%8B%A4%EB%A5%B8%EA%B0%80-a4bfdb48bbc