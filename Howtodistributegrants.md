How to distribute grants to "good public goods"
In my previous article, [Why Public Chain should optimize grant distribution for "good public goods"](/whyneedgrants.md), I talked about how, as the title suggests, the public chain and the state (we call these government functions) have "aligned incentives to develop the ecosystem" (and therefore should invest (and therefore we should invest in them).

In this article, we will write about
- How grants have been distributed so far
- How they should be distributed
- The experimental approach we are working on.

How grants have been distributed up to now
- If you imagine a certain amount of government grants, there is a pre-determined quota, against which you may have often had to explain how attractive your project is in an "open call for proposals" or the like. You may have had to explain how attractive your project is to the public.
- However, this is a method where a small group of decision makers who do not directly use the public goods project decide.
  - It is easy to be hacked off if you make them the standard!
  - Related: [prescribing is easy to be hacked](https://scrapbox.io/tkgshn/%E8%A6%8F%E5%AE%9A%E3%81%97%E3%81%9F%E3%82%89%E3%83%8F%E3%83%83%E3%82%AF%E3%81%95%E3%82%8C%E3%82%8B)

How do we decide "together" who gets what?
- So, what if there is a way for those who use public goods to show "how useful the public good is"?
  - (This is where things get a little more difficult, so please follow me.
  - Directly asking, "Which public good is better?" However, a simple vote ([one person, one vote) will result in `voting or not voting' and cannot express the "strength of individual preferences".
  - Quadratic Voting has been proposed experimentally to express individual preferences.
    - Not "one person, one vote
    - Vote by spending credits
    [![Image from Gyazo](https://i.gyazo.com/364104f17c9edbc5d6186531673e24c3.png)](https://gyazo.com/364104f17c9edbc5d6186531673e24c3)
    - You can spend more credits than usual to cast multiple votes when you think it is important, and you can not vote when you are not interested.
      - But the more widely supported you are by many people, the fewer credits you spend in total
      - The ethical underpinning of this is that "what is supported by many people is good."
 		>Voters receive budgets of "voice credits," which they allocate to different questions on the ballot to signal the intensity Their voice credits convert to "counted votes" according to their square root. So if you put one voice credit on an issue, that is one vote; four credits are two votes; nine credits are three votes, and so on.
        > https://www.radicalxchange.org/concepts/plural-voting/

  - There is a "Quadratic Funding" version of this Quadratic Voting that is optimized for fund distribution.
	- As with Quadratic Voting, one person can have multiple votes (although since it is a donation, it is the face value that indicates the strength of the preference).
	- A "Matching Pool" is created in which a country (e.g. Ethereum) accumulates an amount that it decides to "invest in digital public goods".
		- This matching pool becomes the total amount of support for each project (the Quadratic funding determines how this amount will be determined).
		- The amount of grant money distributed from the matching pool depends on the amount donated and the amount of people who donate (i.e., support)
 		- The strength of an individual's preferences can be indicated by the "amount of donations".
 		- This system is also based on the ethic that "something that is supported (donated) by many people is a good thing
		- Therefore, something like "an individual's donation of $1 will result in $27 reaching the project" can happen.
			Related: [How Can $1 Turn Into $27? Quadratic Funding Explained](https://finematics.com/quadratic-funding-explained/)
[![Image from Gyazo](https://i.gyazo.com/78849c0f8fe3617c575f00eceebbf6ca.png)](https://gyazo.com/78849c0f8fe3617c575f00eceebbf6ca)

Quadratic funding vulnerabilities
However, there are more than good things wrong with Quadratic Funding.
More information can be found at [How to Attack and Defend Quadratic Funding](https://medium.com/block-science/how-to-attack-and-defend-quadratic-funding-a10f0152f069), but what we are focusing on here is "collusion"

*DeCartography*, which protects against the vulnerability of collusion against QFs.
