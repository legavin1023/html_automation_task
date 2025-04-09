<template>
  <div>
    <h1>TXT 파일 처리</h1>
    <input type="file" @change="handleFileUpload" accept=".txt" />
    <input
      type="text"
      v-model="customTitle"
      placeholder="출력 제목을 입력하세요"
    />
    <button @click="previewResult" :disabled="!rawContent">출력</button>
    <button @click="downloadResult" :disabled="!processedContent">
      결과 다운로드
    </button>
    <textarea
      v-if="processedContent"
      v-model="processedContent"
      rows="10"
      cols="50"
      readonly
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      rawContent: "", // 업로드된 원본 텍스트
      processedContent: "", // 처리된 텍스트
      customTitle: "", // 사용자 정의 제목
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.rawContent = e.target.result; // 원본 텍스트 저장
        };
        reader.readAsText(file);
      }
    },
    previewResult() {
      // 처리된 결과를 textarea에 표시
      this.processedContent = this.convertToHTML(this.rawContent);
    },
    convertToHTML(content) {
      const sections = content
        .split("---------------------------")
        .filter((section) => section.trim() !== "");

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.customTitle}</title>
            <style>
                /* Add your CSS styles here */
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${this.customTitle}</h1>
                ${sections
                  .map((section) => {
                    const lines = section.trim().split("\n");
                    const timestampAndAuthor =
                      lines[0].match(/^\[(.*?)\] (.+)$/);
                    const timestamp = timestampAndAuthor
                      ? timestampAndAuthor[1]
                      : "Unknown Timestamp";
                    const author = timestampAndAuthor
                      ? timestampAndAuthor[2]
                      : "Unknown Author";

                    const messageLines = lines
                      .slice(1)
                      .map(
                        (line) =>
                          `<span class="preserve-whitespace">${line}</span>`
                      )
                      .join("");

                    return `
                            <div class="chatlog__message-group">
                                <div class="chatlog__author-avatar-container">
                                    <div class="chatlog__author-avatar"></div>
                                </div>
                                <div class="chatlog__messages">
                                    <span class="chatlog__author-name">${author}</span>
                                    <span class="chatlog__timestamp">${timestamp}</span>
                                    <div class="chatlog__message">
                                        <div class="chatlog__content">
                                            <div class="markdown">
                                                ${messageLines}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                  })
                  .join("\n")}
            </div>
        </body>
        </html>
    `;
    },
    downloadResult() {
      // 처리된 결과를 파일로 다운로드
      const blob = new Blob([this.processedContent], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "processed.html";
      link.click();
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
textarea {
  margin-top: 20px;
  width: 100%;
  resize: none;
}
button {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
