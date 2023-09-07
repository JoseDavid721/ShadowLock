import openai
import re
import nltk
nltk.download('punkt')

openai.api_key = "c85f5ba19e264974912657a10cb70c8d"
openai.api_base = "https://cog-r64zdcyjshwjk.openai.azure.com/"
openai.api_type = 'azure'
openai.api_version = '2023-05-15'

with open('myfile.html', 'r') as myfile:
    code = myfile.read()

tokens = nltk.word_tokenize(code)
if ((len(tokens)+50)*2.5) < 3900:
  print("Size of the file accepted")
else:
  print("The size of the file is large")


response = openai.ChatCompletion.create(
  engine = "gpt-35-turbo-mic",
  messages=[
    {"role": "system", "content": "You are a professional in cybersecurity and you are an expert amending code, to eliminate all the vulnerabilities that the code present and returning the secure code"},
    {"role": "user", "content": "Would you like to check my code?"},
    {"role": "user", "content": "I pass you my code in the next input:"},
    {"role": "user", "content": code},
    {"role": "user", "content": "Answer me with this structure:' Here is your secure code: THE CODE HERE. And a description of what changes have you made with this structure: 'Changes made: LIST OF CHANGES'. In case that the code is not vulnerable, use the same structure with the same code and the description saying why is not vulnerable"},
  ],
  temperature = 0.4
)

secureCode = response['choices'][0]['message']['content']


regex =  re.compile(r'Changes made:(.*)', re.DOTALL)
res = regex.search(secureCode)
description = res.group(1)
print("Description: ", description)


regex = re.compile(r'```(.*)```', re.DOTALL)
res = regex.search(secureCode)
secureCodeLines = res.group(1)
print(secureCodeLines)


fileName = "mySecureFile.html"

with open(fileName, 'w') as myFile:
    myFile.write(secureCodeLines)