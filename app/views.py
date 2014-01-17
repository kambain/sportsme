from django.template.loader import get_template
from django.template import Context, RequestContext
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout

'''
  home = /
'''
def home_(request):
  d = TemplateData()
  t = get_template('home.html')
  c = RequestContext(request, d.getData())    
  return HttpResponse(t.render(c))



'''
  helpers
'''
class TemplateData:
    def __init__(self):
        self.d = {}
    def addData(self, key, entry):
        self.d[key] = entry
    def getData(self):
        return self.d