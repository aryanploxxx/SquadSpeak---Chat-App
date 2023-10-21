class Result(object):
    def _init_(self, arg1, arg2, arg3):
        self.output1 = arg1  # double
        self.output2 = arg2  # double
        self.output3 = arg3  # int

class UserMainCode(object):
    @classmethod
    def mmm(cls, input1, input2):
        # Calculate the mean
        mean = sum(input2) / input1

        # Calculate the median
        median = statistics.median(input2)

        # Calculate the mode
        mode_count = Counter(input2)
        mode = [k for k, v in mode_count.items() if v == max(mode_count.values())]

        return Result(mean, median, mode[0])

# Read only region end

# Example usage:
input1 = int(input("Enter the number of integers: "))
input2 = []
for i in range(input1):
    num = int(input(f"Enter integer {i + 1}: "))
    input2.append(num)

result = UserMainCode.mmm(input1, input2)
print(f"Mean: {result.output1}")
print(f"Median: {result.output2}")
print(f"Mode: {result.output3}")
