# Vocab

- Rest API project to fetch a random word from compiled set of words.

- API has 2 functionality get random word and fetch out the definiton using [Free Dictionary API](https://dictionaryapi.dev/) or just return random word

- Current API is hosted on [Render](https://render.com/)

- Link to access the API https://random-words-api.onrender.com/

---

## Usage

- To fetch random word

```
 $ https://random-words-api.onrender.com/newword
```


```
{
    "word" : "trounces"
}
```
---

- To get definition of a random generated word

```
$ https://random-words-api.onrender.com/
```

```
{
    "Word":"pulsars",
    "Meaning":
    {
        "noun": ["A rotating neutron star that emits radio pulses periodically"]
    },
    "Synonyms":[[]]

}
```
