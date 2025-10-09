"use client";

import React, { useState, useEffect } from 'react';
// 共通コンポーネントのHeaderをエイリアスでインポート
import { Header } from '@/components/header/header';
// MobileMenuコンポーネントを正確なパスでインポート
import { MobileMenu } from '@/components/header/mobile-menu'; 

// 画面サイズ切り替えの基準となるブレイクポイントを定義 (768px未満でモバイル表示)
const MOBILE_BREAKPOINT = 768; 

const HeaderSwitcher: React.FC = () => {
  // 画面がモバイル幅かどうかを管理するステート
  const [isMobile, setIsMobile] = useState(false);
  // 初回ハイドレーション時の問題を避けるため、マウント完了フラグを使用
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // コンポーネントがブラウザにマウントされたらtrueに
    setIsMounted(true);
    
    // 画面幅をチェックし、ステートを更新する関数
    const checkSize = () => {
      // ウィンドウ幅がブレイクポイント未満ならモバイルと判断
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // 初回ロード時に実行
    checkSize(); 

    // ウィンドウサイズ変更イベントのリスナーを設定
    window.addEventListener('resize', checkSize);

    // クリーンアップ関数: コンポーネントが破棄されるときにリスナーを解除
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  // マウントが完了するまでは何もレンダリングしない（CLS防止策）
  if (!isMounted) {
    // サーバーサイドレンダリング時にこのnullが返される
    return null;
  }

  // isMobile の状態に応じて、HeaderまたはMobileMenuをレンダリングする
  return isMobile ? (
    <MobileMenu /> 
  ) : (
    // ★修正箇所: styleを直接渡して、上下に余白を作る★
    <Header/>
  );
};

export default HeaderSwitcher;
