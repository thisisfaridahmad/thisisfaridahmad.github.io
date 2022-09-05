import os
print('1: Profiles available in your PC')
print('2: Interface on your system')
print('3: Networks available in your area')
answer = input()
if(answer == '1'):
    os.system('cls')
    os.system('netsh wlan show profiles')
    first = input()
if(answer == '2'):
    os.system('cls')
    os.system('netsh wlan show interface')
    second = input()
if(answer == '3'):
    os.system('cls')
    os.system('netsh wlan show networks')