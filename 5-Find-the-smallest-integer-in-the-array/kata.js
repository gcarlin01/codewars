class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => a - b)

        return args[0]
    }
    
  }
  
  export default SmallestIntegerFinder