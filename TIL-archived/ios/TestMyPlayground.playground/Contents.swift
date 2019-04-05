import UIKit

/* 함수 */

// MARK: - 매개변수 기본값
// 기본값을 갖는 매개변수는 매개변수 목록 중에 뒤쪽에 위치하는 것이 좋습니다.
// func 함수이름 (매개변수1이름: 매개변수1타입, 매개변수2이름 = 매개변수 기본값 ...) -> 반환타입 {
//      함수 구현부
//      return 반환값
// }

func greeting(friend: String, me: String = "yagom") {
    print("Hello \(friend)! I'm \(me)")
}

// 매개변수 기본값을 가지는 매개변수는 생략할 수 있습니다.
greeting(friend: "hana")
greeting(friend: "john", me: "eric")
