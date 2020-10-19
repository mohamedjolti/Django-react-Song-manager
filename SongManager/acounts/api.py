from rest_framework import generics,permissions

from rest_framework.response import Response

from knox.models import AuthToken

from .serializers import Userserializer,RegisterSerializer,LoginSerializer

#register api
class RegisterApi(generics.GenericAPIView):
    serializer_class=RegisterSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        print("hello world")
        return Response({
            "user":Userserializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })



#login api
class LoginApi(generics.GenericAPIView):
    serializer_class=LoginSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data
        print("hello world")
        return Response({
            "user":Userserializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })  
#get user 


