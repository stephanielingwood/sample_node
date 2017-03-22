import json

latin_string = u"a test of \xe9 char"
encoded_latin_string = latin_string.encode('latin-1')
print(encoded_latin_string)
