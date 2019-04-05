def check_palindrome(word):
    is_palindrome = True
    if len(word) <= 1:
        return True
    if word[0] == word[-1]:
        check_palindrome(word[1:-1])
    else
        is_palindrome = False
    return is_palindrome

word = input('Write a word: ')

