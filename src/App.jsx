import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

const App = () => {
  console.log("AppStart");
  //State 扱う変数とその変数をセットするための関数を宣言する。useState関数で初期値を設定する
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFrag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFrag(!faceShowFlag);
  };

  //関心の分離
  //第2引数に変数をセットするとその変数に変化があった時だけメソッド内を通る
  //第2引数に空の配列を渡すと最初の一回だけこのメソッド内を通るようになる
  useEffect(() => {
    console.log("userEffect!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFrag(true);
      } else {
        faceShowFlag && setFaceShowFrag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]);

  return (
    /// return文は一つしか返せないので React.Fragment で囲う必要がある
    /// 省略形で<> </> が使える
    <>
      {/* CSSを直接記述する場合：　最初の{}じゃJavaScriptであることを表す
          2個目の{}はCSSであることを表す
     */}
      <h1 style={{ color: "red" }}>Hello!</h1>
      {/* プロップスで引数を渡す */}
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>UseEffext OnOff</button>
      <p>{num}</p>
      {/* && はtrueの場合は右側を返す */}
      {faceShowFlag && <p>useEffectのテスト</p>}
    </>
  );
};

// 他のファイルでも使うことを明示する
export default App;
