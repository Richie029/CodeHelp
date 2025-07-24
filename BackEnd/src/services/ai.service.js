const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
});

async function reviewCode(userCode, language = "javascript") {
  const prompt = `
You are a professional code reviewer. Review the following code systematically:

1. Identify if the code has **any bugs, syntax issues, or logical errors**.
   - If yes, clearly explain what is wrong.
   - Point out the **exact line(s) or section** where the error occurs.
   - Provide a **corrected version** of the code after the explanation.

2. If the code is **correct**, do not modify it unnecessarily.
   - Provide a brief explanation of **what the code does**.
   - Suggest **best practices** (e.g., naming conventions, optimization, readability, security).
   - Recommend **improvements**, if any (e.g., performance, structure, language features).

3. Always return your review in the following format:
---
✅ Code Status: [Correct / Incorrect]

🧠 Review Summary:
[1-2 line summary]

🔍 Issues Found:
- [Issue 1: explanation]
- [Issue 2: explanation]

✅ Fixed Code:
\`\`\`${language}
[corrected code]
\`\`\`

📘 Explanation:
[What the code does + suggestions + best practices]

💡 Suggestions (Optional):
- [List improvements or alternatives]
---

Here is the code to review:
\`\`\`${language}
${userCode}
\`\`\`
(use bold and little bit big headings for each section) 
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.4,
  });

  return completion.choices[0].message.content;
}
