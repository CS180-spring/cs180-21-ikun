#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

struct Champion {
	string id;
	string key;
	string name;
	string title;
	string image;
	vector<string> skins;
};

int main() {
	map <string, Champion> champions = {{"Aatrox", {"Aatrox", "266", "Aatrox", "the Darkin Blade", "Aatrox.png", {"default", "Justicar Aatrox", "Mecha Aatrox", "Sea Hunter Aatrox", "Blood Moon Aatrox", "Blood Moon Aatrox Prestige Edition"}}}, };

	string championName;
	cout << "Please enter a champion name: ";
	cin >> championName;

	auto it = champions.find(championName);
	if (it == champions.end()) {
		cout << "Sorry, I can't find the champion." << endl;
	}
	else {
		cout << "Champion Name: " << it->second.name << endl;
		cout << "ID: " << it->second.id << endl;
		cout << "Key: " << it->second.key << endl;
		cout << "Title: " << it->second.title << endl;
		cout << "Image: " << it->second.image << endl;
		cout << "Skins: " << endl;
		for (const auto& skin : it->second.skins) {
			cout << "  - " << skin << endl;
		}
	}

	return 0;
}
