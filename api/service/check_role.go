package service

import (
	"porker/model"
	"sort"
	"strconv"
)

// role
func CheckRole(cardList []string) model.Rule {
	cards := getCards(cardList)

	// get list
	_, suitCounts, numberCounts := GetList(cards)

	// max suit count
	suitMaxCount := 0
	for _, suitCount := range suitCounts {
		if suitMaxCount < suitCount {
			suitMaxCount = suitCount
		}
	}

	// is flash
	isFlash := suitMaxCount == 5

	// is straight , max number count and pair count
	isStraight := false
	contiCount := 1
	beforeIndex := 0
	numberMaxCount := 0
	pairCount := 0
	for i, numberCount := range numberCounts {
		if numberCount == 1 {
			if beforeIndex+1 == i || contiCount == 0 {
				contiCount++
			}
			if contiCount == 5 {
				isStraight = true
				break
			}
			beforeIndex = i
		} else {
			contiCount = 0
			beforeIndex = 0
		}

		if numberMaxCount < numberCount {
			numberMaxCount = numberCount
		}

		if numberCount == 2 {
			pairCount++
		}
	}

	// is straight flash
	if isFlash && isStraight {
		return model.StraightFlush
	}

	// is four of a kind
	if numberMaxCount == 4 {
		return model.FourOfAKIND
	}

	// is full house
	if numberMaxCount == 3 {
		isFullHouse := false
		for _, numberCount := range numberCounts {
			if numberCount == 2 {
				isFullHouse = true
				break
			}
		}
		if isFullHouse {
			return model.FullHouse
		}
	}

	// is flush
	if isFlash {
		return model.Flush
	}

	// is straight
	if isStraight {
		return model.Straight
	}

	// is three of a kind
	if numberMaxCount == 3 {
		return model.ThreeOfAKind
	}

	// is two pair
	if pairCount == 2 {
		return model.TwoPair
	}

	// is one pair
	if pairCount == 1 {
		return model.OnePair
	}

	return model.NoPair
}

func GetList(cards []model.Card) ([]int, map[string]int, []int) {
	numbers := make([]int, len(cards))
	suitCounts := map[string]int{}
	numberCounts := make([]int, 14)
	for i, v := range cards {
		numbers[i] = v.Number
		suitCounts[v.Suit] = suitCounts[v.Suit] + 1
		numberCounts[v.Number-1] = numberCounts[v.Number-1] + 1
		if v.Number == 1 {
			numberCounts[13] = numberCounts[13] + 1
		}
	}

	sort.Ints(numbers) // sort

	return numbers, suitCounts, numberCounts
}

func getCards(cardList []string) []model.Card {
	var cards = make([]model.Card, len(cardList))
	for i, v := range cardList {
		cards[i].Suit = v[0:1]
		cards[i].Number, _ = strconv.Atoi(v[1:])
	}

	return cards
}
