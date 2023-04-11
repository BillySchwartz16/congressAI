import requests
import pprint as pp
from ai import AI
import re
import json

class Congress:
    BASE_URL = 'https://api.congress.gov/v3/'

    def __init__(self, collection, api_key):
        self.collection = collection
        self.api_key = api_key

    def search(self, query):
        endpoint = f'{self.BASE_URL}{self.collection}/search'
        params = {
            'q': query,
            'offset': 0,
            'pageSize': 20,
            'api_key': self.api_key
        }
        response = requests.get(endpoint, params=params)
        return response.json()

    def all_bills(self, congress_num, bill_type):
        endpoint = f'{self.BASE_URL}bill/{congress_num}/{bill_type}?offset=0&pageSize=10'
        params = {
            'api_key': self.api_key
        }
        response = requests.get(endpoint, params=params)
        return response.json()

    def get_bill(self, congress_num, bill_type, bill_num):
        endpoint = f'{self.BASE_URL}bill/{congress_num}/{bill_type}/{bill_num}'
        params = {
            'api_key': self.api_key
        }
        response = requests.get(endpoint, params=params)
        return response.json()

    def get_member(self, member_id):
        endpoint = f'{self.BASE_URL}members/{member_id}'
        params = {
            'api_key': self.api_key
        }
        response = requests.get(endpoint, params=params)
        return response.json()

    def make_req(self, endpoint):
        params = {
            'api_key': self.api_key
        }
        response = requests.get(endpoint, params=params)
        return response.json()


congress = Congress("bill","hCMFRSQeE48cpPebKhz5AmUw07bHDU5PWHQFIHjP")




# pp.pprint(congress.get_bill(118, 's', 686))
def summarize_text(text):
    # Remove any URLs from the text
    text = re.sub(r'http\S+', '', text)

    # Remove any newlines and extra spaces
    text = ' '.join(text.split())

    # Check if the text is already short enough
    if len(text) <= 2500:
        return text

    # Split the text into sentences
    sentences = re.split(r'(?<=\.) ', text)

    # Concatenate sentences until we reach the maximum character count
    summary = ''
    char_count = 0
    for sentence in sentences:
        sentence_length = len(sentence)
        if char_count + sentence_length <= 2500:
            summary += sentence
            char_count += sentence_length
        else:
            break

    # Add ellipsis to the end of the summary
    summary += '...'

    return summary


# message = requests.get("api.congress.gov/v3/bill/118/hr")

# print(message.text)

gpt = AI()

# # message = requests.get("https://www.congress.gov/118/bills/s686/BILLS-118s686is.xml")

# #only take the first 2000 characters of the bill

# # message = summarize_text(message.text)

# #prompt = {"role": "system", "content": "you are a world class writer and political analyst.  Please only respond with the summary of the bill I send.  repsond in json format with {title:"", sponsers:"", vote_date:"", summary:""} "},{"role": "user", "content": message}

params = {
    'api_key': "hCMFRSQeE48cpPebKhz5AmUw07bHDU5PWHQFIHjP"
}
response = requests.get("https://api.congress.gov/v3/bill/118/hr", params=params)
bills = response.json()["bills"]

mylist = []

for i in bills:
    mylist.update({"id":i["number"], "title": i["title"], "la":i["latestAction"], "summary":i["summary"]})



# messages = congress.all_bills(118, 'hr')
# for i in messages["bills"]:
#     pp.pprint(i)

# for i in messages["bills"]:
#     message = json.dumps(i)
#     prompt = {"role": "system", "content": "you are a world class writer and political analyst.  I am passing you a json payload of bills.  please return bills as follows {'congress_num': '118', 'bill_name': 'example bill', 'summary': 'this bill does x,y,z'}"},{"role": "user", "content": message}


#     print(gpt.generate(prompt))



#{"role": "system", "content": "you are a world class email writer"},{"role": "user", "content": prompt}

