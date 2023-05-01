#include <iostream>
#include <cstdio>
#include <cstring>
#include "json.hpp"
#include "table.h"

using json = nlohmann::json;

using namespace std;

int main(){
    try {
        json data = readJsonFile("data.json");
        // Do something with the JSON data
    } catch (const exception& e) {
        cout << "Error: " << e.what() << endl;
        return 1;
    }

    while(true){
        cout << "\t\t  ##Temporary UI ##";
        cout <<"\n\n                                          ";
        cout << "\n\n";
        cout << "\n \t\t\t 1. CREATE RECORD";
        cout << "\n \t\t\t 2. READ RECORD";
        cout << "\n \t\t\t 3. UPDATE RECORD";
        cout << "\n \t\t\t 4. DELETE RECORD";
        cout << "\n \t\t\t 5. FILTER SEARCH";
        cout << "\n \t\t\t 6. SORT RECORDS";
        cout << "\n \t\t\t 7. Exit";
        cout << "\n\n";
        cout << "\t\t\t Enter Your Choice: ";

        string userChoice;
        cin >> userChoice;

        if(userChoice == "1"){
            addRecord();
        }

        else if(userChoice == "2"){
            displayData();
        }

        else if(userChoice == "3"){
            editRecord();
        }

        else if(userChoice == "4"){
            deleteRecord();
        }

        else if(userChoice == "5"){
            filterData();
        }

        if(userChoice == "6"){
            sortData();
        }

        else if(userChoice == "7"){
           cout<< "Thank You for Using Our App"
           return 0; 
        }
    }
    return 0;
}