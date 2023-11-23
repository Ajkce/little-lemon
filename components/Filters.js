import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Filters = ({ onChange, selections, sections }) => {
  return (
    <View style={styles.filtersContainer}>
      {sections.map((section, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onChange(index);
          }}
          style={[
            styles.cat,
            {
              backgroundColor: selections[index] ? "#5d6462" : "#d2dbd8",
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.text,
                { color: selections[index] ? "#d2dbd8" : "#5d6462" },
              ]}
            >
              {section}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
    marginTop: 15,
    borderBottomColor: "#bdc2bf",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  cat: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    color: "#3f4140",
  },
  text: {
    fontWeight: "800",
  },
});

export default Filters;
