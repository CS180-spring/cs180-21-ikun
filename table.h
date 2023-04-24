#ifndef TABLE_H
#define TABLE_H

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

struct Record {
    int id;
    string name;
    int age;
    int numberofskin;
    string team;
};

class MyData {
public:
    void addRecord(const Record& record);
    void editRecord(int id, const Record& record);
    void deleteRecord(int id);
    std::vector<Record> filterData(const std::string& team, int min_age, int max_age) const;
    void displayData() const;
    void sortData(std::string field);

private:
    std::vector<Record> records_;
};

#endif // TABLE_H
