class solution(object):
    def ispalindrom(self, x):
        temp=x
        rev=0
        while(temp>0):
            remender=temp%10
            rev=rev*10+remender
            temp=temp/10
        
        if x==rev:
            return True
        
        return False
            