#include<iostream>
using namespace std;
int main(){
    for(int i = 20; i >= 3;i--){
        cout <<"<!--p"<<i<<"=======================================================================================================--> "<<'\n';
        cout <<"<div class=\"product_box\" onclick=\"viewProduct('p"<<i<<"')\">"<<'\n';
        cout <<"    <img src=\"/img/trapstar/03f535ab.png\" id=\"p"<<i<<"-img\">"<<'\n';
        cout <<"    <div class=\"des\"> "<<'\n';
        cout <<"        <p style=\"font-style: italic;\" id=\"p"<<i<<"-tag\">#trapstar</p>   "<<'\n';
        cout <<"        <p id=\"p"<<i<<"-name\">Trapstar crewneck</p>    "<<'\n';
        cout <<"        <p style=\"color: rgb(27, 65, 27);\" id=\"p"<<i<<"-price\">$1.200.000</p> "<<'\n';
        cout <<"    </div> "<<'\n';
        cout <<"</div> "<<'\n';
        cout <<" "<<'\n';
      

    }
}