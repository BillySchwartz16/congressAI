import os
import openai


class AI:
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")
        openai.api_key = self.api_key
    def generate(self, prompt):
        try:
            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages=prompt,
                temperature=0.8,
                max_tokens=7000,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )

            return response["choices"][0]["message"]["content"]
        except Exception as e:
            return e

#{"role": "system", "content": "you are a world class email writer"},{"role": "user", "content": prompt}