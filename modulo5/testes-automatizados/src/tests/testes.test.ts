import performPurchase, {User}  from "../index"



test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 80
	}

	const result = performPurchase(user, 90)

	expect(result).toEqual({
		name: "Leandro Maiero",
		balance: 70
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Lais Oliveira",
		balance: 30
	}

	const result = performPurchase(user, 30)

	expect(result).toEqual({
		...user,
		balance: 0
	}
 )
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Karine Maiero",
		balance: 20
	}

	const result = performPurchase(user, 40)

	expect(result).not.toBeDefined()
})