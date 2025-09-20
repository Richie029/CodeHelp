import { GoogleGenerativeAI } from "@google/generative-ai";

const openai = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function reviewCode(userCode) {
  const prompt = `
You are a professional code reviewer. Review the following code systematically:

---
# ✅ Code Status: [Correct / Incorrect]

## 🧠 Review Summary:
[1-2 line summary]

## 🔍 Issues Found:
- [Issue 1: explanation]
- [Issue 2: explanation]

## ✅ Fixed Code:
[corrected code]
\`\`\`

## 📘 Explanation:
[What the code does + suggestions + best practices]

## 💡 Suggestions (Optional):
- [List improvements or alternatives]
---

Here is the code to review:
${userCode}
\`\`\`
  `;

  // use gemini-pro (closest to gpt-4)
  const model = openai.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export { reviewCode };
