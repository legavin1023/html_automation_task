<template>
  <div class="css-custom">
    <div class="preamble">
      <div class="preamble__guild-icon-container">
        <img
          class="preamble__guild-icon"
          src="https://foundryvtt.com/static/assets/icons/fvtt.png"
          alt="Guild icon"
          loading="lazy"
        />
      </div>
      <div class="preamble__entries-container">
        <div class="preamble__entry">${this.customTitle}</div>
      </div>
    </div>
    <div class="chatlog__message-group">
      <div class="chatlog__author-avatar-container">
        <div class="chatlog__author-avatar author-01-GM" title="01-GM"></div>
      </div>

      <div class="chatlog__messages">
        <span class="chatlog__author-name">01-GM</span>
        <span class="chatlog__timestamp">4/2/2025, 9:20:51 PM</span>

        <div
          class="chatlog__message"
          title="Message sent: 4/2/2025, 9:20:51 PM"
        >
          <div class="chatlog__content">
            <div class="markdown">
              <span class="preserve-whitespace">-17. 럭키 본즈 탐험.. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssCustom",
};
</script>

<style>
/* 전체 컨테이너 */
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
/* 기본 설정: html과 body의 높이를 100%로 설정 */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; /* 부모 요소의 높이를 100%로 설정 */
  background-color: #1e1e1e; /* 다크 모드 배경색 */
  display: flex; /* 부모 요소도 flex로 설정 */
  flex-direction: column;
  border: 5px solid #333; /* 어두운 외곽선 */
}

/* 전체 컨테이너 */
.css-custom {
  background-color: #1e1e1e; /* 어두운 배경 */
  text-align: center;
  font-family: "Pretendard-Regular";
  height: 100%; /* 부모 요소의 100% 높이를 차지 */
  color: #e0e0e0; /* 밝은 텍스트 색상 */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 정렬 추가 */
}

/* 프리앰블 (상단 정보) */
.preamble {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #444; /* 어두운 테두리 */
  padding-bottom: 10px;
}

.preamble__guild-icon-container {
  margin-right: 15px;
}

.preamble__guild-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #e0e0e0; /* 밝은 테두리 */
}

.preamble__entries-container {
  text-align: left;
}

.preamble__entry {
  font-size: 34px;
  color: #b0b0b0; /* 중간 밝기의 텍스트 */
}

/* 메시지 그룹 */
.chatlog__message-group {
  width: 80%;
  min-width: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #444; /* 어두운 테두리 */
  border-radius: 8px;
  background-color: #2a2a2a; /* 어두운 배경 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* 어두운 그림자 */
}

/* 아바타 */
.chatlog__author-avatar-container {
  margin-right: 10px;
}

.chatlog__author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #555; /* 중간 밝기의 배경 */
  background-size: cover;
  background-position: center;
  border: 2px solid #e0e0e0; /* 밝은 테두리 */
}

/* 메시지 내용 */
.chatlog__messages {
  text-align: left;
  flex: 1;
}

.chatlog__author-name {
  font-size: 14px;
}

.chatlog__timestamp {
  font-size: 12px;
  color: #888; /* 어두운 회색 텍스트 */
  margin-left: 10px;
}

.chatlog__message {
  margin-top: 5px;
}

.chatlog__content {
  background-color: #333; /* 어두운 배경 */
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  color: #e0e0e0; /* 밝은 텍스트 */
}

.markdown {
  font-family: "Pretendard-Regular";
  color: #d0d0d0; /* 중간 밝기의 텍스트 */
}
</style>
