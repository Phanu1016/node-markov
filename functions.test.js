const markov = require("./markov");

let mm;

beforeEach( () => {
    mm = new markov.MarkovMachine("the cat in the hat");
})



test("Split words properly", () => {
    expect(mm.words).toEqual(expect.arrayContaining(['the', 'cat', 'in', 'the', 'hat']));


});

test("Generating the correct chains", () => {
    let obj = { the: ["cat", "hat"], cat: ["in"], in: ["the"], hat: [null] };

    expect(mm.chains["the"]).toEqual(expect.arrayContaining(obj["the"]));
    expect(mm.chains["cat"]).toEqual(expect.arrayContaining(obj["cat"]));
    expect(mm.chains["in"]).toEqual(expect.arrayContaining(obj["in"]));
    expect(mm.chains["hat"]).toEqual(expect.arrayContaining(obj["hat"]));
});

test("Check if makeText() returns properly", () => {
    let returnedText = mm.makeText()
    expect(returnedText).toBeDefined()

});
