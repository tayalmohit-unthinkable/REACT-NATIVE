import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const cardData = [
  {
    id: '1',
    brand: 'VISA',
    number: '9038 4061**** ****',
    holder: 'Imran Khan',
    expiry: '02/02',
    color: '#FFE3C6',
  },
  {
    id: '2',
    brand: 'VISA',
    number: '9049 4062**** ****',
    holder: 'Imran Khan',
    expiry: '03/03',
    color: '#D6D5FF',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            <Text style={styles.greetingLight}>Hi, </Text>
            <Text style={styles.greetingBold}>There</Text>
          </Text>
          <View style={styles.icon}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </View>
        </View>

        {/* Recurring Charges Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            You have 3 recurring charges that are due at the beginning of next month.
          </Text>
        </View>

        {/* Spending Summary */}
        <View style={styles.spendingRow}>
          <View style={styles.spendingBox}>
            <Text style={styles.spendingTitle}>Today</Text>
            <Progress.Circle
              size={70}
              progress={0.25}
              thickness={5}
              color="#1DC795"
              unfilledColor="#eee"
              borderWidth={0}
              showsText={false}
            />
            <Text style={styles.spendingAmount}>$181.39</Text>
          </View>

          <View style={styles.spendingBox}>
            <Text style={styles.spendingTitle}>March</Text>
            <Progress.Circle
              size={70}
              progress={0.7}
              thickness={5}
              color="#0C0A4E"
              unfilledColor="#eee"
              borderWidth={0}
              showsText={false}
            />
            <Text style={styles.spendingAmount}>$734.02</Text>
          </View>
        </View>

        {/* Cards */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cards</Text>
          <View style={styles.allCardsBox}>
            <Text style={styles.allCardsText}>All Cards</Text>
          </View>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cardData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: item.color }]}>
              <Text style={styles.cardBrand}>{item.brand}</Text>
              <Text style={styles.cardNumber}>{item.number}</Text>
              <View style={styles.cardFooter}>
                <View>
                  <Text style={styles.cardLabel}>Card Holder</Text>
                  <Text>{item.holder}</Text>
                </View>
                <View>
                  <Text style={styles.cardLabel}>Exp Date</Text>
                  <Text>{item.expiry}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { fontSize: 32 },
  greetingLight: { fontWeight: '300', color: '#333' },
  greetingBold: { fontWeight: '700', color: '#000' },
  icon: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 999,
  },
  infoBox: {
    backgroundColor: '#E7E4FB',
    borderRadius: 20,
    padding: 16,
    marginTop: 20,
  },
  infoText: { fontSize: 14, color: '#333' },
  spendingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  spendingBox: {
    alignItems: 'center',
    flex: 1,
  },
  spendingTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  spendingAmount: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  allCardsBox: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  allCardsText: {
    fontSize: 14,
    color: '#000',
  },
  card: {
    borderRadius: 20,
    padding: 20,
    marginRight: 15,
    width: 280,
    marginTop: 20,
  },
  cardBrand: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardNumber: {
    fontSize: 20,
    marginVertical: 10,
    letterSpacing: 1.5,
    fontWeight: '600',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 12,
    color: '#555',
  },
});
