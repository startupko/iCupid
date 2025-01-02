import React from 'react';
import { MessageSquareHeart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-primary-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
              不再為回覆煩惱，iCupid幫你解決！
            </h1>
            <div className="space-y-4 mb-8">
              {/* <p className="text-xl text-primary-text/80">百萬用戶信賴之選</p> */}
              <p className="text-xl text-primary-text/80">繁體中文AI聊天助手</p>
              {/* <p className="text-xl text-primary-text/80">發送完美回覆</p> */}
              {/* <p className="text-xl text-primary-text/80">成功約會保證</p> */}
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-r from-gradient-start to-gradient-end bg-opacity-10 backdrop-blur-sm"
              style={{
                background: "linear-gradient(#1b1635, #151635) padding-box, linear-gradient(240.2deg, #4eabe4, #cd2f6b) border-box",
                border: ".2rem solid #0000",
                borderRadius: "40px",
              }}>
              <h2 className="text-2xl font-bold text-primary-text mb-4">發送完美回覆</h2>
              <button className="w-full bg-primary-accent text-white text-lg px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors mb-4">
                立即免費試用
              </button>
              {/* <p className="text-primary-text/60 text-sm">無風險試用，之後每週只需 HK$88</p> */}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1591867192864-fed3a1622179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="愉快的約會場景"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}