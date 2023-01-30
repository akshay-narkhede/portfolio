# Python3 implementation to print
# the counter clock wise
# spiral traversal of matrix
R = 4
C = 4

"""
matrix, represents the elements in each cell of the matrix of size N*M.
"""



def funcHopSkipJump(matrix):
    # Write your code here
    # print(matrix)

    m = len(matrix)
    n = len(matrix[0])

    data = []

    k = 0
    l = 0
    cnt = 0
    skipp = 0

    total = m * n


    while (k < m and l < n):
        if (cnt == total):
            break


        for i in range(k, m):
            # if skipp % 2 == 0:
            data.append(matrix[i][l])
            skipp += 1
            cnt += 1

        l += 1

        if (cnt == total):
            break


        for i in range(l, n):
            # if skipp % 2 == 0:
            data.append(matrix[m-1][i])
            skipp += 1
            cnt += 1

        m -= 1

        if (cnt == total):
            break

        if (k < m):
            for i in range(m - 1, k - 1, -1):
                # if skipp % 2 == 0:
                data.append(matrix[i][n-1])
                cnt += 1
            skipp += 1
            n -= 1

        if (cnt == total):
            break

        if (l < n):
            for i in range(n - 1, l - 1, -1):
                # if skipp % 2 == 0:
                data.append(matrix[k][i])
                skipp +=1
                cnt += 1

            k += 1

    print(data)
    res = [data[i] for i in range(len(data)) if i%2 ==0]

    print(res)


    return res[-1]


def main():
    # input for matrix
    matrix = []
    matrix_rows, matrix_cols = map(int, input().split())
    for idx in range(matrix_rows):
        matrix.append(list(map(int, input().split())))

    result = funcHopSkipJump(matrix)
    print(result)


if __name__ == "__main__":
    main()

